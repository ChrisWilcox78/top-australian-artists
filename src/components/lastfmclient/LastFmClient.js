
export function getTopArtists() {
	return fetch(
		"https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=australia&limit=10&api_key=24c990f786fd892d7c74a62505a795c8&format=json"
	)
	.then(results => results.json())
	.then(json => _extractRelevantSummaryDetails(json.topartists.artist));
}

export function getArtistDetails(mbid) {
	return fetch(
		"https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=24c990f786fd892d7c74a62505a795c8&format=json&mbid=" +
		mbid
	)
	.then(results => results.json())
	.then(data => _extractRelevantArtistDetails(data));
}

function _extractRelevantSummaryDetails(artistsArray) {
	return artistsArray.map(rawArtist => {
		return {
			mbid: rawArtist.mbid,
			name: rawArtist.name,
			imageUrl: rawArtist.image[4]["#text"]
		};
	});
}

function _extractRelevantArtistDetails(data) {
	return {
		artistName: data.artist.name,
		artistImageUrl: data.artist.image[2]["#text"],
		artistBio: {__html: data.artist.bio.content}
	};
}

export default {getTopArtists, getArtistDetails};
