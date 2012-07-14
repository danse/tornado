from setuptools import setup, find_packages

setup(
    name='tornado',
    include_package_data=True,
    packages=find_packages(),
    install_requires='vishnje',
    dependency_links=[
        'git+https://github.com/danse/vishnje.git#egg=vishnje-dev',
        ],
    scripts=[
        'scripts/tornado.py',
        ],
    )
