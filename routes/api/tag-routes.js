const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  }).then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

// find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  }).then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});
// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag) => {
    if (req.body.productIds && req.body.productIds.length) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          tag_id: tag.id,
          product_id,
        };
      });
      return ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(tag);
  })
});
// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id }
  }).then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No Tag found with this id' })
      return;
    }
    res.json(dbTagData);
  })
});
  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id }
  }).then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No Tag found with this id' })
      return;
    }
    res.json({ message: `Tag with id ${req.params.id} has been deleted successfully.` });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Error deleting the tag' });
  });
});

module.exports = router;
