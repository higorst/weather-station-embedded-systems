module.exports = {
    updateValues(request, response) {
        request.io.emit('updateValues', request.body);
        return response.json(request.body);
    }
};