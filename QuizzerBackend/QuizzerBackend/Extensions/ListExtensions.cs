namespace QuizzerBackend.Extensions
{
    using System;
    using System.Collections.Generic;

    public static class ListExtensions
    {
        private static readonly Random rng = new();

        public static List<T> Shuffle<T>(this List<T> list)
        {
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                T value = list[k];
                list[k] = list[n];
                list[n] = value;
            }

            return list;
        }

        public static List<T> AddItem<T>(this List<T> list, T newItem)
        {
            var newList = new List<T>(list);
            newList.Add(newItem);

            return newList;
        }
    }
}
