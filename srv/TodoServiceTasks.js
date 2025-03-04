const cds = require('@sap/cds');

module.exports = async function (req, res) {
    const apiConnect = await cds.connect.to("jsonplaceholder"); // connect hook to external service
    this.on("getToDos", async (req) => {
        const endPoint = req.data.id ? `/todos/${req.data.id}` : `/todos`;

        return await apiConnect.tx(req).get(endPoint);
    });

    this.on("createToDos", async (req) => {
        return await apiConnect.tx().post(`/todos`, req.data);
    });

};