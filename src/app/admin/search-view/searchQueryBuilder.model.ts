export class SearchQueryBuilder {

    public queryBuilder(ref,params) {
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                console.log(key, params[key]);
                ref = ref.where(key, '==',params[key]);
            }
        }
        console.log('ref', ref);
        return ref;
    };
}