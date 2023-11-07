module.exports = {
     // Other webpack configuration...

     module: {
          rules: [
               {
                    test: /\.mjs$/,
                    use: {
                         loader: 'source-map-loader',
                         options: {
                              exclude: /@mediapipe\/tasks-vision\/vision_bundle_mjs\.js/,
                         },
                    },
                    enforce: 'pre',
               },
               // Other module rules...
          ],
     },
};
