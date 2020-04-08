const Observable = require("tns-core-modules/data/observable").Observable;

function createViewModel() {
    const viewModel = new Observable();
    let counter = 5;
    viewModel.message = `${counter}`;

    viewModel.requestAdd = () => {
        counter++;
        if (counter > 10) {
            viewModel.set("message", 'Over 10 ...');
        } else {
            viewModel.set("message", `${counter}`);
        }
    }
    viewModel.requestMinus = () => {
        counter--;
        if (counter < 0) {
            viewModel.set("message", 'Under 0 ...');
        } else {
            viewModel.set("message", `${counter}`);
        }
    }
    return viewModel;
}

exports.createViewModel = createViewModel;
