var convertFilteredList = function (originalList, searchKeys, searchValue) {
    var filteredList = originalList;
    if (searchKeys &&
        searchKeys.length > 0 &&
        searchValue &&
        searchValue.length > 0) {
        filteredList = [];
        originalList.forEach(function (obj) {
            searchKeys.forEach(function (searchKey) {
                if (isIncluded(obj, searchKey, searchValue)) {
                    filteredList.push(obj);
                }
            });
        });
    }
    return filteredList;
};
var isIncluded = function (obj, searchKey, searchValue) {
    if (!obj)
        return false;
    var value = obj[searchKey];
    if (!value) {
        return false;
    }
    if (value.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        return true;
    }
    return false;
};
export default { convertFilteredList: convertFilteredList };
//# sourceMappingURL=converter.js.map