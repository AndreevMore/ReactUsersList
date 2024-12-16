const debounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<T>) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  
  export default debounce;