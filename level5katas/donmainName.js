// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
// domainName("qp-cqtk7i94vxnkt0mtvsp9jpj.co/") == "qp-cqtk7i94vxnkt0mtvsp9jpj"

function domainName(url) {
    let splitUrl = url.split('.')
    if (url.includes('http' && url.includes('www') === false)) {
        return splitUrl[0].substr(7)
    } else if (url.includes('www')) {
        return splitUrl[1]
    } else if (splitUrl[0].split('/')[2]) {
        return splitUrl[0].split('/')[2]
    } else { return splitUrl[0] }
}


// this was the number one solution. I like the Idea of using .replace here to get rid of unwanted info.
function domainName(url) {
    url = url.replace('https://','')
    url = url.replace('http://','');
    url = url.replace('www.', '')
    return url.split('.')[0]
}



