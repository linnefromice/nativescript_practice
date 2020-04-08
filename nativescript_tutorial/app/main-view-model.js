const Observable = require("tns-core-modules/data/observable").Observable;

function selectMessage(counter) {
    if (counter > 10) {
        return 'Over 10 ...';
    } else if (counter < 0) {
        return 'Under 0 ...';
    } else {
        return `${counter}`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    let counter = 5;
    viewModel.message = `${counter}`;

    viewModel.requestAdd = () => {
        counter++;
        viewModel.set("message", selectMessage(counter));
    }
    viewModel.requestMinus = () => {
        counter--;
        viewModel.set("message", selectMessage(counter));
    }
    return viewModel;
}

exports.createViewModel = createViewModel;
