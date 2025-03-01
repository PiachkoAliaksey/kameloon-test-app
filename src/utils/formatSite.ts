export function formatSite(site:string|undefined){
    return  site?.replace(/^(https?:\/\/)?(www\.)?/, '');
}