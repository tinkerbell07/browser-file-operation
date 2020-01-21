/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

/**
 * For opening files, dynamically either loads the Native File System API module
 * or the legacy method.
 */
export const fileOpenPromise = (async () => {
  if ('chooseFileSystemEntries' in window) {
    return await import('./file-open-nativefs.mjs');
  }
  return await import('./file-open-legacy.mjs');
})();
