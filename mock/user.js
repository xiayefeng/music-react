export default {
  '/user/getUserDetail': (req, res) => {
    setTimeout(() => {
      res.send({
        status: 200,
        message: 'success',
        data: {
          name: 'anyuxuan',
          age: 32,
          country: 'cn'
        }
      })
    }, 1000)
  }
}