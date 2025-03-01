import { TTest } from "../types"
import { TSites } from "../types"
import { formatSite } from "./formatSite"

export function formatData(tests: TTest[], sites: TSites[]) {
    return tests.map((test) => ({ status: test.status, name: test.name, type: test.type, id: test.id, site: formatSite(sites.find((item) => item.id === test.siteId)?.url) }))
}