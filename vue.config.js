module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com/',
        // https://m.maoyan.com/ajax/movieOnInfoList?token=
        ws: true,
        changeOrigin: true
      },
      '/mock': {
        target: 'https://www.easy-mock.com',
        // https://m.maoyan.com/ajax/movieOnInfoList?token=
        ws: true,
        changeOrigin: true
      },
    }
  }
}
