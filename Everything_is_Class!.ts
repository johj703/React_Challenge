// LocalStorage API
abstract class LocalStorage<T> {
  // 데이터 저장
  setItem(key: string, value: T): void {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }

  // 데이터 불러오기
  getItem(key: string): T | null {
    const jsonData = localStorage.getItem(key);
    if(jsonData) {
      return JSON.parse(jsonData);
    }
    return null
  }

  // 특정 키의 데이터 삭제
  clearItem(key: string): void {
    localStorage.removeItem(key);
  }

  // 모든 데이터 삭제
  clear(): void {
    // 로컬 스토리지의 모든 아이템 삭제
    localStorage.clear();
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
