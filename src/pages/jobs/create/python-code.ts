export const pythonCode = `import re
from functools import partial
from shared.context import JobContext

class WordCountJobContext(JobContext):
    def _init_accumulators(self, sc):
        self.initalize_counter(sc, 'words')


strip_regexp = re.compile(r"[^w]*")

def to_pairs(context, word):
    context.inc_counter('words')
    return word, 1


def analyze(sc):
    print "Running wordcount"
    context = WordCountJobContext(sc)

    text = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at condimentum augue. Sed a massa convallis, rhoncus felis sed, fringilla lacus. Sed tristique nulla sem, ut egestas erat consequat sed. Duis ultrices nulla eu elit consectetur elementum. Vivamus pharetra erat sit amet quam tincidunt efficitur. Aenean fringilla convallis ipsum, eu dapibus lorem congue sit amet. Nam vehicula, nibh vitae semper tincidunt, nisl augue lobortis nisl, ut efficitur velit ligula vitae leo. Duis vel augue auctor, rhoncus mi et, rhoncus nisi. Vivamus aliquam sagittis laoreet. Mauris non elementum metus. Donec sagittis, diam eget feugiat suscipit, dolor tortor dignissim tellus, sed luctus augue odio vel sapien. Sed eleifend lectus a sem maximus viverra. Proin eu nulla nulla. Quisque suscipit lacinia arcu, ac suscipit diam malesuada sed. Curabitur vel iaculis erat, non ultricies mi.
Class aptent taciti, feugiat ut mi quis, blandit varius elit. Quisque ullamcorper quam quis lectus varius auctor. Ut suscipit tellus justo, eget interdum dui placerat at. Nunc mattis augue eu justo condimentum fermentum eu nec magna. Pellentesque nec ante blandit, dapibus erat ut.
    """

    to_pairs_trasform = partial(to_pairs, context)

    words = sc.parallelize(text.split())
    pairs = words.map(to_pairs_trasform)
    counts = pairs.reduceByKey(lambda a, b: a+b)
    ordered = counts.sortBy(lambda pair: pair[1], ascending=False)

    result = ordered.collect()
    print result
    context.print_accumulators()

    return result
`;