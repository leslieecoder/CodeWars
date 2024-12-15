// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"

// url => string
// return => string
// "http://github.com/carbonfive/raygun" -> domain name = "github"


function domainName(url){
    

    // Remove protocol (http://, https://, etc.) and "www."
    url = url.replace(/(https?:\/\/)?(www\.)?/, "");

    // Split by "/" to ignore paths or queries
    url = url.split("/")[0];

    // Split by "." and return the first part
    const parts = url.split(".");
    return parts[0]; // This is the domain name
    //neww
}
  

  