#!/usr/bin/python
import logging
import sys
import optparse
from pkg_resources import resource_string

from vishnje import D3Application

def history(ll):
    '''
    >>> [c for c in history((1, 1, 1, 1, 1))]
    [1.0, 1.0, 1.0, 1.0, 1.0]
    >>> [c for c in history((1, 2, 3, 4, 5, 6, 7))]
    [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0]
    '''
    s = 0
    for i,l in enumerate(ll):
        s += float(l)
        yield(s/(i+1))

if __name__ == '__main__':
    parser = optparse.OptionParser()
    parser.add_option(
        '-c', '--compress', action='store_true',
        dest='compress', default=False
        )
    parser.add_option(
        '-d', '--debug', action='store_true',
        dest='debug', default=False
        )
    options, args = parser.parse_args()

    logging.basicConfig(level=logging.INFO)

    data = list(reversed(list(history(reversed(list(map(float, sys.stdin)))))))

    title = 'tornado average visualization'
    js = resource_string('tornado', 'tornado.js').decode()

    application = D3Application(js, title)
    application.init_data(data)
    application.launch()
