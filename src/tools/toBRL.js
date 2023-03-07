function toBRL(value, decimalPlaces) {
  if (!isNaN(value)) {
    const valorRetorno = value.toLocaleString("pt-BR", {
      minimumFractionDigits: decimalPlaces,
      style: "currency",
      currency: "BRL",
      useGrouping: false,
    });

    return valorRetorno;
  }
}

export default toBRL;
