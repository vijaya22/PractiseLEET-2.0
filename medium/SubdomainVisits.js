/**
 *  https://leetcode.com/problems/subdomain-visit-count/
 */
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let n = cpdomains.length;
  let visitsMap = new Map();
  for (let i = 0; i < n; i++) {
    let cp = cpdomains[i];
    let [visit, domain] = cp.split(" ");
    let allDomains = getAllPossibleDomains(domain);
    for (let j = 0; j < allDomains.length; j++) {
      let dom = allDomains[j];
      if (visitsMap.has(dom)) {
        let vis = visitsMap.get(dom);
        visitsMap.set(dom, parseInt(vis) + parseInt(visit));
      } else {
        visitsMap.set(dom, visit);
      }
    }
  }
  let result = [];
  for (let [key, value] of visitsMap) {
    result.push(value + " " + key);
  }
  return result;
};

function getAllPossibleDomains(domain) {
  let domainArr = domain.split(".");
  let sum = "";
  let res = [];
  for (let i = domainArr.length - 1; i >= 0; i--) {
    sum = domainArr[i] + sum;
    res.push(sum);
    sum = "." + sum;
  }
  return res;
}
