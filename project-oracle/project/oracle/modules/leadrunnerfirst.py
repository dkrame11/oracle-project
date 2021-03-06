import math
import numpy as np
from scipy import stats
import pandas as pd
from oracle.modules.module import Module

class LeadRunnerOnFirst(Module):
    
    def set_module(self):
        return True
    
    def get_lexicon(self):
        result = set()
        result.add('lead-runner-on-first')
        return result
    
    '''if self.is_filter return an index set else return a table'''
    def execute(self, iset, data, is_grouped):
        if is_grouped:
            data = data.apply(lambda g: g).reset_index(drop=True)
        data = data.iloc[iset,:]
        rset = []
        for index, row in data.iterrows():
            if not math.isnan(row['on_1b']) and math.isnan(row['on_2b']) and math.isnan(row['on_3b']):
                rset.append(index)
        return rset