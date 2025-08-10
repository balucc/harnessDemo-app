module.exports = async function (context, req) {
    context.log('Hello World Function triggered');
    context.res = {
        status: 200,
        body: "Hello, World from Azure Function!"
    };
};