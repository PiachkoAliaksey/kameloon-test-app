import axios from "axios";
import { formatData } from "../utils/formatData";

export const BASE_URL = 'http://localhost:3100/';

export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    },
});

export async function getTestsWithSite() {
    try {
        const [sites, tests] = (await Promise.allSettled([instance.get('sites'), instance.get('tests')])).map((res) => res.status === 'fulfilled' ? res.value : undefined)

        return formatData(tests?.data, sites?.data)

    } catch (error) {
        console.log('Error:', error);
    }
}

export async function getTest(query: number) {
    try {
        const response = await instance.get(`/tests/${query}`)

        return response.data

    } catch (error) {
        console.log('Error:', error);
    }
}


