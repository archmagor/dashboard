// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Application configuration service.
 *
 * @final
 */
export class AppConfigService {
  /**
   * @param {!appConfig_DO_NOT_USE_DIRECTLY} appConfig
   * @ngInject
   */
  constructor(appConfig) {
    /** @private {!appConfig_DO_NOT_USE_DIRECTLY} */
    this.appConfig_ = appConfig;

    /** @private {number} */
    this.initTime_ = (new Date()).getTime();
  }

  /**
   * Returns current server time.
   *
   * @return {?Date}
   * @export
   */
  getServerTime() {
    if (!isNaN(this.appConfig_.serverTime)) {
      let elapsed = (new Date()).getTime() - this.initTime_;
      return new Date(this.appConfig_.serverTime + elapsed);
    } else {
      return null;
    }
  }
}
