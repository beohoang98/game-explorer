declare interface SearchResult<T = any> {
    count: number;
    results: T[];
}
