
let schema = [];

module.exports.addToSchema = flag => {
    schema.push(flag);
    return schema;
}

module.exports.getFlagType = flagName => {
    const flagType = schema.filter((flag) => {
        return flag.name === flagName;
    });
    return flagType[0].type;

}

module.exports.execute = commands => {
    return commands;
}


