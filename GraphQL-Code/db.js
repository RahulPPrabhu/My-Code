let animes = [
    {'id': '1', 'title': 'One Piece','status': 'ongoing'},
    {'id': '2', 'title': 'Naruto Classic','status': 'completed'},
    {'id': '3', 'title': 'Demon Slayer','status': 'ongoing'},
    {'id': '4', 'title': 'Death Note','status': 'completed'},
    {'id': '5', 'title': 'Naruto Shippuden','status': 'completed'}
]

let characters = [
    {'id': '1', 'name': 'Luffy', 'anime_id': '1'},
    {'id': '2', 'name': 'Naruto', 'anime_id': '2'},
    {'id': '3', 'name': 'Tanjiro', 'anime_id': '3'},
    {'id': '4', 'name': 'Light', 'anime_id': '4'},
    {'id': '5', 'name': 'Jiraya', 'anime_id': '5'},
    {'id': '6', 'name': 'Zoro', 'anime_id': '1'},
    {'id': '7', 'name': 'Itachi', 'anime_id': '2'},
    {'id': '8', 'name': 'Zenitsu', 'anime_id': '3'},
    {'id': '9', 'name': 'Minato', 'anime_id': '5'}
]

let reviews = [
    {'id': '1', 'ratings': 10, 'content': 'Must Watch', 'anime_id': '1', 'character_id': '1'},
    {'id': '2', 'ratings': 10, 'content': 'Awesome', 'anime_id': '2', 'character_id': '2'},
    {'id': '3', 'ratings': 8, 'content': 'Best Graphics', 'anime_id': '3', 'character_id': '3'},
    {'id': '4', 'ratings': 9, 'content': 'First Anime', 'anime_id': '4', 'character_id': '4'},
    {'id': '5', 'ratings': 10, 'content': 'Supperrrrr', 'anime_id': '5', 'character_id': '5'}
]

export default {animes, characters, reviews}