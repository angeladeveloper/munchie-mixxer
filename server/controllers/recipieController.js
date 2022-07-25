// - GET /
/**
 * homepage /
 */

exports.homepage = async (req, res) => {
  console.log('🟢Render index page')
  res.render('index', {
    title: 'Munchie🥦 Homepage🏠'
  });
}