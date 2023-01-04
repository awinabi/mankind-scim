
export interface BaseDataAdapter<T> {
    readAll: () => Array<T>;

    // T read(Criteria criteria);
    // T create(T entity);
    // T update(T entity);
    // T delete (T entity);
}
