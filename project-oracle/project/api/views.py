#!/usr/bin/env python
# -*- coding: utf-8 -*-

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import pandas as pd
import numpy as np
import json


class Hello(APIView):

    def get(self, request, format=None):
        data = {'msg': 'Hello from both React & Django!'}
        print(data)
        return Response(data)

    def post(self, request, format=None):
        data = {'msg': 'post response!'}
        return Response(data)


class Query(APIView):

    def get(self, request, format=None):
        return Response('ok')

    def post(self, request, format=None):
        msg = 'we got your query: %s' % request.data['query']
        df = pd.DataFrame(np.random.randint(low=0, high=1000, size=(5, 5)),
                          columns=['stats 1', 'stats 2', 'stats 3', 'stats 4', 'stats 5'])

        result, sample_size, plot, rterms = settings.ORACLE.run(request.data['query'])

        response = {
            'type': 'records',
            'data': result.to_json(orient='records'), # df.to_json(orient='records')
            'headline': 'Investigate Features More Like This: {}'.format(', '.join(rterms)),
            'plot': plot
        }

        return Response(json.dumps(response))
