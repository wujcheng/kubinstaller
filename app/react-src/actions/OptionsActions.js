/*
Copyright 2018 Cloudbase Solutions Srl

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// @flow

import alt from '../alt'
import PersistenceManager from '../ipc/PersistenceManager'
import OptionsStore from '../stores/OptionsStore'

class OptionsActions {
  updateSelectedNetworkDriver(value: string) {
    return { value }
  }

  updateClusterNetworkStartIp(value: string) {
    return { value }
  }

  updateClusterNetworkEndIp(value: string) {
    return { value }
  }

  updateServiceNetworkStartIp(value: string) {
    return { value }
  }

  updateServiceNetworkEndIp(value: string) {
    return { value }
  }

  updateIngressToggle(value: boolean) {
    return { value }
  }

  updateHelmToggle(value: boolean) {
    return { value }
  }

  updateRegistryToggle(value: boolean) {
    return { value }
  }

  save() {
    return { promise: PersistenceManager.save('options', OptionsStore.getState()) }
  }

  load() {
    return {
      promise: PersistenceManager.load('options').then(
        (data: OptionsStore) => { this.loadFulfilled(data) },
        error => { this.loadRejected(error) }
      ),
    }
  }

  loadFulfilled(data: OptionsStore) {
    return data || true
  }

  loadRejected(error) {
    return error || true
  }
}

export default alt.createActions(OptionsActions)
