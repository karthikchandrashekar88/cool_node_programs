function adele() {
    this.song_1 = 'Rolling In the Deep';

    this.getSongCollection = function() {
        var collection = [
            'Rolling In the Deep',
            'Someone Like You',
            'Set Fire to the Rain',
            'Skyfall - This is the end',
            'Turning Tables'
        ];
        return collection
    }
}

var adele_songs = new adele();
console.log('\nadele_songs :', adele_songs);
console.log('\nadele song 1 :', adele_songs.song_1);
console.log('\nadele song collection:', adele_songs.getSongCollection());
module.exports = adele;
