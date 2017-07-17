function NeuralNetwork(){
    this.activate = function sigmoid(x) {
        return 1 / (1 + Math.exp(-x));
    };
    this.hiddenLayerWeights = math.matrix(window.hiddenLayerWeights);
    this.outputLayerWeights = math.matrix(window.outputLayerWeights);
}

NeuralNetwork.prototype.query = function(input_array){
    inputs = math.matrix(input_array);

    hiddenLayerInputs = math.multiply(inputs, math.transpose(this.hiddenLayerWeights));
    hiddenLayerOutputs = hiddenLayerInputs.map(x => this.activate(x));

    outputLayerInputs = math.multiply(hiddenLayerOutputs, math.transpose(this.outputLayerWeights));
    outputLayerOutputs = outputLayerInputs.map(x => this.activate(x));

    return outputLayerOutputs;
}