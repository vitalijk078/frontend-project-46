import _ from 'lodash';

const getSortedKeys = (data1, data2) => _.sortBy(_.union(_.keys(data1), _.keys(data2)));


const buildNode = (key, type, value = null, value1 = null, value2 = null, children = null) => {
  return { key, type, value, value1, value2, children };
};

const getDifference = (data1, data2) => {
  const sortedKeys = getSortedKeys(data1, data2);

  return sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return buildNode(key, 'added', data2[key]);
    }
    if (!_.has(data2, key)) {
      return buildNode(key, 'deleted', data1[key]);
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return buildNode(key, 'nested', null, null, null, getDifference(data1[key], data2[key]));
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return buildNode(key, 'changed', null, data1[key], data2[key]);
    }
    return buildNode(key, 'unchanged', data2[key]);
  });
};

export default getDifference;
