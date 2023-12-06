export const toThousand = num => {
  if (!num) {
    return 0;
  }

  return String(num).replace(/[^\d]/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").replace(/^0+/,'');
}

export const fromThousand = num => {
  if (!num) {
    return 0;
  }

  return String(num).replace(/[^\d]/g, '');
}