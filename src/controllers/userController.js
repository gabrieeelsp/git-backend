const getAll = (res, req) => {
    req.status(200).json({list: [{id: 1, name: 'Gabriel'}, {id:2, name: 'Astor'}]});
};

module.exports = {
    getAll,
}
