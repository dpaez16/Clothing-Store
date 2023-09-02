export default class SheetsAPIClient {
    static #createFetchRequest(body) {
        const url = `${SHEETS_API_URL}`;
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
};