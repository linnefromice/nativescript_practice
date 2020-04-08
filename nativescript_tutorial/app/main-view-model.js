const Observable = require("tns-core-modules/data/observable").Observable;

function getMessage(counter) {
    return `${counter}`;
}

function createViewModel() {
    const viewModel = new Observable();
    let counter = 10;
    viewModel.message = getMessage(counter);

    viewModel.requestAdd = () => {
        counter++;
        viewModel.set("message", getMessage(counter));
    }
    viewModel.requestMinus = () => {
        counter--;
        viewModel.set("message", getMessage(counter));
    }
    return viewModel;
}

exports.createViewModel = createViewModel;
