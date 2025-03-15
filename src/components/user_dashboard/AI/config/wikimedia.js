const API_URL = "https://en.wikipedia.org/w/api.php";

async function fetchPhilippineLaws(query) {
    const params = new URLSearchParams({
        action: "query",
        format: "json",
        list: "search",
        srsearch: query,
        origin: "*", // Bypass CORS restrictions
    });

    try {
        const response = await fetch(`${API_URL}?${params.toString()}`);
        const data = await response.json();

        if (data.query && data.query.search) {
            return data.query.search.map((item) => ({
                title: item.title,
                snippet: item.snippet,
                pageId: item.pageid,
            }));
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching Philippine laws:", error);
        return [];
    }
}

export default fetchPhilippineLaws;
