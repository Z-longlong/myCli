
const downloadFetch = require('download-git-repo');


function download (params) {
    console.log(`${params.url}`, process.cwd())
    // clone(params.url, process.cwd(), { checkout: 'main' })
    downloadFetch(`${params.url}`, `${params.name}`, { clone: false }, (err) => {
        console.log(err)
        console.log(err ? 'Error' : 'Success')
    })
}

module.exports = download