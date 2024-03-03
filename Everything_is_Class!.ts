// LocalStorage API
interface StorageI<T> {
  [key: string]: T;
}
interface ClearItemI<C> {
  clearItem(): void;
}

class LocalStorage<T> {
  private storage: StorageI<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: T): void {
    this.storage.removeItem(this.getOriginKey(key));
  }
  clear() {
    this.storage = {};
  }
}

// Geolocation API
interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
  timestamp: number;
}

interface PositionError {
  code: number;
  message: string;
}

type WatchPositionCallback = (position: Position) => void;

interface Geolocation {
  getCurrentPosition(
    successCallback: (position: Position) => void,
    errorCallback?: (error: PositionError) => void,
    option?: PositionOptions
  ): void;

  watchPosition(
    successCallback: WatchPositionCallback,
    errorCallback?: (error: PositionError) => void,
    option?: PositionOptions
  ): number;

  clearWatch(watchId: number): void;
}

class CustomGeolocation implements Geolocation {
  private watchId: number | null = null;

  getCurrentPosition(
    successCallback: (position: Position) => void,
    errorCallback?: (error: PositionError) => void,
    options?: PositionOptions
  ): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        options
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  watchPosition(
    successCallback: WatchPositionCallback,
    errorCallback?: (error: PositionError) => void,
    options?: PositionOptions
  ): number {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        successCallback,
        errorCallback,
        options
      );
      this.watchId = id;
      return id;
    } else {
      console.error("Geolocation is not supported by this browser.");
      return -1;
    }
  }

  clearWatch(watchId: number): void {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(watchId);
      this.watchId = null;
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
}
