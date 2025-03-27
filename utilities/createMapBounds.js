let fs = require('fs'),
PNG = require('pngjs').PNG;

fs.createReadStream('./assets/maps/map-navigation-bnw.png')
.pipe(new PNG())
.on('parsed', function()
{
    let validPixels = {};
    for (let y = 0; y < this.height; y++)
    {
        for (let x = 0; x < this.width; x++)
        {
            let idx = (this.width * y + x) << 2;
            if (this.data[idx] === 255)
            {
                if (validPixels[y])
                {
                    validPixels[y].push(x);
                }
                else
                {
                    validPixels[y] = [x];
                }
            }
        }
    }

    fs.writeFileSync(
        './src/validateMovement.js',
        'export const mapBounds = ' + JSON.stringify(validPixels)
    );
});