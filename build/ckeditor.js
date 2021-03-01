const NUMBER_TEN = 10

export default function (value) {
    return NUMBER_TEN * (value || 1);
}

export function count(value) {
    return NUMBER_TEN + value
}