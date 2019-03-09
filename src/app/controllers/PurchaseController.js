const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async index (req, res) {
    const filters = {}

    const purchases = await Purchase.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      sort: '-createdAt',
      populate: ['buyer', 'item']
    })
    return res.json(purchases)
  }

  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad)
      .where('purchasedBy')
      .equals(null)
      .populate('author')

    if (!purchaseAd) return res.json('Já vendido')

    const user = await User.findById(req.userId)

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    const purchase = await Purchase.create({
      item: ad,
      message: content,
      buyer: user.id
    })

    return res.json(purchase)
  }

  async sell (req, res) {
    const purchase = await Purchase.findById(req.params.id)
    if (!purchase) return res.json('Já vendido')
    const purchasedBy = req.params.id
    const ad = await Ad.findByIdAndUpdate(
      purchase.item,
      { purchasedBy },
      {
        new: true
      }
    )
      .where('purchasedBy')
      .equals(null)
    if (!ad) return res.json('Já vendido')
    return res.json(ad)
  }
}

module.exports = new PurchaseController()
