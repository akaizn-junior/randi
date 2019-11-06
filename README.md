# Randi

## Random Names Generator

Uses a list of nouns and adjectives to create a random name.

## Description

Random Names can be used as placeholder names or actual names for content.
The data creates interesting names by simply smooshing random nouns and adjectives together.
Any offensive or inapropriate combinations are not intentional and may be removed.

## Install

```npm i @verdebydesign/randi```

## Usage

### Browser

```js
<script src="randi.min.js"></script>
<script>
    const randomName = randi('_');
    // ex: a_random_name
</script>
```

### CommonJS

```js
const randi = require('randi');
const randomTitle = randi('-');

// ex: a-random-title
```

### CLI

```shell
randi --sep '-'
# ex: title-random
```

## CLI Options

### Synopsis

randi [-h] [-s=separator]

### Quick use

```shell
randi
# ex: random name
```

|Options||
|--|--|
| -s, --sep| Provide a separator for the generated string other than space|
| -h, --help| Show help |

## Shout outs

To the creator of this Gist were most of the data is from
<https://gist.github.com/ijmacdowell/8325491>

## License

ISC License [ISC](https://opensource.org/licenses/ISC)

## Author

&copy; 2019 Verdexdesign
