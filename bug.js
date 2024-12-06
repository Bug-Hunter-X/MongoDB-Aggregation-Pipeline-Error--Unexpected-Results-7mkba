```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $match: { /* ... */ }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  }
])
```