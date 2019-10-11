import {
  getRecommendMusic,
  collectMusicById,
  getGroupMusic
} from '../api/music'
import { observable, computed, action, autorun, when } from 'mobx'
class Music{
  @observable recommendMusic = {
    name: '',
    author: '',
    background: '',
    type: '',
    alias: '',
    audio: ''
  }

  @action.bound
  async getRecommendMusic() {
    let recommendMusic = await getRecommendMusic()
    this.recommendMusic = recommendMusic.data
  }
  
}

const music = new Music()

export default music