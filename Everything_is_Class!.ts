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
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return null;
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
// 위치 정보를 담는 타입 정의
type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
  timestamp: number;
};

// 위치 정보 오류를 담는 타입 정의
type PositionError = {
  code: number;
  message: string;
};

// watchPosition 메서드에 사용되는 콜백 타입 정의
type WatchPositionCallback = (position: Position) => void;

// Geolocation 인터페이스 정의
interface Geolocation {
  // 현재 위치 정보를 얻어오는 메서드
  getCurrentPosition(
    successCallback: (position: Position) => void,
    errorCallback?: (error: PositionError) => void,
    options?: PositionOptions
  ): void;

  // 위치 정보를 실시간으로 감시하는 메서드
  watchPosition(
    successCallback: WatchPositionCallback,
    errorCallback?: (error: PositionError) => void,
    options?: PositionOptions
  ): number;

  // 위치 감시를 중지하는 메서드
  clearWatch(watchId: number): void;
}

// Geolocation 인터페이스를 구현하는 클래스 작성
class CustomGeolocation implements Geolocation {
  private watchId: number | null = null;

  // 현재 위치 정보를 얻어오는 메서드
  getCurrentPosition(
    successCallback: (position: Position) => void,
    errorCallback?: (error: PositionError) => void,
    options?: PositionOptions
  ): void {
    // 브라우저가 Geolocation API를 지원하는지 확인
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => successCallback(position),
        (error) => errorCallback?.(error),
        options
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  // 위치 정보를 실시간으로 감시하는 메서드 작성
  watchPosition(
    successCallback: WatchPositionCallback,
    errorCallback?: (error: PositionError) => void,
    options?: PositionOptions
  ): number {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => successCallback(position),
        (error) => errorCallback?.(error),
        options
      );
      this.watchId = id;
      return id;
    } else {
      console.error("Geolocation is not supported by this browser.");
      return -1;
    }
  }

  // 위치 감시를 중지하는 메서드 구현
  clearWatch(watchId: number): void {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(watchId);
      this.watchId = null;
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
}
